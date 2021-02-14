using Get_Taxi.Entities;
using Get_Taxi.Services.Repositories;

namespace Get_Taxi.Services.ServiceInterfaces
{
    public interface IMessageRepository:IRepository<Messages>
    {
        void addMessage(Messages model);
        
    }
}