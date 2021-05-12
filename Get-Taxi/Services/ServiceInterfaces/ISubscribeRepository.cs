using System.Threading.Tasks;
using Get_Taxi.Entities;

namespace Get_Taxi.Services.ServiceInterfaces
{
    public interface ISubscribeRepository
    {
        void subscribeUser(SubscribedUsers model);
        Task<bool> isSubsribed(SubscribedUsers model);
    }
}