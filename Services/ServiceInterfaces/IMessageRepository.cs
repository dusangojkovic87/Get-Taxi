using System.Collections.Generic;
using Get_Taxi.Entities;
using Get_Taxi.Models;
using Get_Taxi.Services.Repositories;

namespace Get_Taxi.Services.ServiceInterfaces
{
    public interface IMessageRepository:IRepository<Messages>
    {
        void addMessage(Messages model);
        IEnumerable<Messages> GetMessages();
       
        
    }
}