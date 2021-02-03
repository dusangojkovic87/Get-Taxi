using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Get_Taxi.Models;
using Get_Taxi.Services;
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
        private IRegisterRepository _registerService;
        private ILogger<Authentication> _logger;
        private readonly IConfiguration _configuration;
        public Authentication(IRegisterRepository registerService, ILogger<Authentication> logger, IConfiguration configuration)
        {
            _configuration = configuration;
            _logger = logger;
            _registerService = registerService;
        }


        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register(RegisterModel model)
        {

            if (ModelState.IsValid)
            {
               
            var saved = await _registerService.Register(model);
            if (saved)
            {
                return Ok(new { message = true });
            }

            return BadRequest(new { error = "User already exists!" });
            }
        return BadRequest(ModelState);
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(LoginModel model)
        {

            if (ModelState.IsValid)
            {           
            var user = await _registerService.getUser(model);
            if (user == null)
            {
                return BadRequest(new { error = "You are not registered!" });
            }
            if (BC.Verify(model.Password, user.Password))
            {
                var claims = new[]{
                      new Claim("UserId",user.Id.ToString()),
                      new Claim("UserId",user.Email)
                };

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Tokens:key"]));
                var creds = new SigningCredentials(key,SecurityAlgorithms.HmacSha256);
                
                var token = new JwtSecurityToken(
                _configuration["Tokens:Issuer"],
                _configuration["Tokens:Audience"],
                claims,
                expires:DateTime.UtcNow.AddMinutes(120),
                signingCredentials:creds     
            );

            var userToken = new {
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
