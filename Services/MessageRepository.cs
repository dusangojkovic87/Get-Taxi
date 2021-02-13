using System.Threading.Tasks;
using AutoMapper;
using Get_Taxi.Entities;
using Get_Taxi.Models;

namespace Get_Taxi.Services
{
    public interface IMessageRepository
    {
        Task<bool> addMessage(MessageAddModel model);
    }
    public class MessageRepository : IMessageRepository
    {
        private AplicationDbContext _context;
        private IMapper _mapper;
        public MessageRepository(AplicationDbContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;

        }


        public async Task<bool> addMessage(MessageAddModel model)
        {
            var message = _mapper.Map<Messages>(model);
            await _context.AddAsync(message);
            var saved = await _context.SaveChangesAsync() > 0;
            if(saved){
                return true;
            }

        return false;
        
        }
    }
}