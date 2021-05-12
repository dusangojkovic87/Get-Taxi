using System.Threading.Tasks;
using Get_Taxi.Entities;
using Get_Taxi.Models;
using Get_Taxi.Services.ServiceInterfaces;
using Microsoft.EntityFrameworkCore;

namespace Get_Taxi.Services.Repositories
{
    public class SubscribeRepository : Repository<SubscribedUsers>, ISubscribeRepository
    {
        private AplicationDbContext _context;
        public SubscribeRepository(AplicationDbContext context) : base(context)
        {
            _context = context;

        }

        public async Task<bool> isSubsribed(SubscribedUsers model)
        {
            var exist = await _context.SubscribedUsers.SingleOrDefaultAsync(x => x.Email == model.Email);
            if (exist != null)
            {
                return true;
            }
            return false;
        }

        public void subscribeUser(SubscribedUsers model)
        {
            _context.SubscribedUsers.Add(model);
        }
    }
}