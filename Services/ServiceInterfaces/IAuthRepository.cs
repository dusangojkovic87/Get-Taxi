using System.Threading.Tasks;
using Get_Taxi.Entities;

namespace Get_Taxi.Services.ServiceInterfaces
{
    public interface IAuthRepository:IRepository<User>
    {
        Task<User> getUserFromDb(User model);
        User hashPassword(User model);
        
    }
}