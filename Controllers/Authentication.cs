using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Get_Taxi.Entities;
using Get_Taxi.Models;
using Get_Taxi.Services.ServiceInterfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using BC = BCrypt.Net.BCrypt;

namespace Get_Taxi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Authentication : ControllerBase
    {
 
        private IUnitOfWork _repository;
        private readonly IMapper _mapper;
        private readonly IConfiguration _configuration;

        public Authentication(IUnitOfWork repository, IMapper mapper, IConfiguration configuration)
        {
            _configuration = configuration;
            _mapper = mapper;
            _repository = repository;

        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register(RegisterModel model)
        {

            if (ModelState.IsValid)
            {
                var user = _mapper.Map<User>(model);

                var userFromDb = await _repository.AuthUser.getUserFromDb(user);
                if (userFromDb == null)
                {
                    var userWithHashPass = _repository.AuthUser.hashPassword(user);
                    _repository.AuthUser.Add(userWithHashPass);
                    if (_repository.Save() > 0)
                    {
                        return Ok(new { message = "User registered!" });
                    }

                }
            }
            return BadRequest(ModelState);

        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(LoginModel model)
        {

            if (ModelState.IsValid)
            {
                var user = _mapper.Map<User>(model);
                var userFromDb = await _repository.AuthUser.getUserFromDb(user);

                if (userFromDb == null)
                {
                    return BadRequest(new { message = "You are not registered!" });
                }

                if (BC.Verify(user.Password, userFromDb.Password))
                {
                    var claims = new[]{
                         new Claim("UserId",user.Id.ToString()),
                         new Claim("UserEmail",user.Email)
                     };

                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Tokens:key"]));
                    var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                    var token = new JwtSecurityToken(
                         _configuration["Tokens:Issuer"],
                        _configuration["Tokens:Audience"],
                         claims,
                        expires: DateTime.UtcNow.AddMinutes(120),
                        signingCredentials: creds
                       );

                    var userToken = new
                    {
                        token = new JwtSecurityTokenHandler().WriteToken(token),
                        expiration = token.ValidTo,
                        authenticated = true
                    };

                    return Ok(userToken);
                }
                return BadRequest(new { error = "Password do not match!" });
            }
            return BadRequest(ModelState);
        }


    }
}








