using BC = BCrypt.Net.BCrypt;
using System.Threading.Tasks;
using Get_Taxi.Models;
using Get_Taxi.Entities;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using Microsoft.Extensions.Configuration;

namespace Get_Taxi.Services
{

    public interface IRegisterRepository
    {
        Task<bool> Register(RegisterModel model);
        Task<User> getUser(LoginModel model);
    }


    public class RegisterRepository : IRegisterRepository
    {
        private readonly AplicationDbContext _context;
        private IMapper _mapper;
        private readonly IConfiguration _configuration;
        public RegisterRepository(AplicationDbContext context, IMapper mapper, IConfiguration configuration)
        {
            _configuration = configuration;
            _mapper = mapper;
            _context = context;

        }


        public async Task<bool> Register(RegisterModel model)
        {
            var newUser = _mapper.Map<User>(model);

            var userExist = await _context.User.SingleOrDefaultAsync(x => x.Email == model.Email);
            if (userExist == null)
            {
                var passwordHash = BC.HashPassword(model.Password);
                newUser.Password = passwordHash;
                await _context.User.AddAsync(newUser);
                var saved = await _context.SaveChangesAsync() > 0;
                if (saved)
                {
                    return true;
                }

            }
            return false;

        }

        public async Task<User> getUser(LoginModel model)
        {
            var user = await _context.User.SingleOrDefaultAsync(x => x.Email == model.Email);
            return user != null ? user : null;
   
        }

    }
}
