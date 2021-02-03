using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Get_Taxi.Entities;
using Get_Taxi.Models;
using Microsoft.EntityFrameworkCore;

namespace Get_Taxi.Services
{
    public interface IBookingRepository
    {
        Task<bool> bookTaxi(TaxiOrderAddModel model,int userId);
    }




    public class BookingRepository : IBookingRepository
    {
        private readonly AplicationDbContext _context;
        private readonly IMapper _mapper;

        public BookingRepository(AplicationDbContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;

        }


        public async Task<bool> bookTaxi(TaxiOrderAddModel model,int userId)
        {
         model.UserId = userId;
         var order = _mapper.Map<TaxiOrders>(model);
         await _context.TaxiOrders.AddAsync(order);
         var isSaved = await _context.SaveChangesAsync() > 0;
         return isSaved;

        }
    }
}