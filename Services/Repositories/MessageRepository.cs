using System.Collections.Generic;
using System.Linq;
using Get_Taxi.Entities;
using Get_Taxi.Models;
using Get_Taxi.Services.ServiceInterfaces;

namespace Get_Taxi.Services.Repositories
{
    public class MessageRepository : Repository<Messages>, IMessageRepository
    {
        private readonly AplicationDbContext _context;
        public MessageRepository(AplicationDbContext context):base(context)
        {
           _context = context;

        }
        public void addMessage(Messages model)
        {
            _context.Messages.Add(model);
        }

        public IEnumerable<Messages> GetMessages()
        {
            return _context.Messages.ToList();

        }
    }
}