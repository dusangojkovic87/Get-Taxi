using System;
using System.Linq;
using System.Threading.Tasks;
using Get_Taxi.Entities;
using Get_Taxi.Models;
using Get_Taxi.Services.ServiceInterfaces;
using Microsoft.EntityFrameworkCore;
using BC = BCrypt.Net.BCrypt;


namespace Get_Taxi.Services.Repositories
{
    public class AuthRepository : Repository<User>, IAuthRepository
    {
        private AplicationDbContext _context;
        public AuthRepository(AplicationDbContext context) : base(context)
        {
            _context = context;

        }
        public async Task<User> getUserFromDb(User model)
        {
            return await _context.User.SingleOrDefaultAsync(x => x.Email == model.Email);
        }

        public User hashPassword(User model)
        {

            var hashedPass = BC.HashPassword(model.Password);
            model.Password = hashedPass;
            return model;
        }

    }
}
