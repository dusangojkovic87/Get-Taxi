using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Get_Taxi.Entities;
using Get_Taxi.Models;
using Get_Taxi.Services.ServiceInterfaces;

namespace Get_Taxi.Services.Repositories
{
    public class BookingRepository : Repository<TaxiOrders>, IBookingRepository
    {
        private  AplicationDbContext _context;
        public BookingRepository(AplicationDbContext context) : base (context)
        {
            _context = context;

        }

        public  void bookTaxi(TaxiOrders model)
        {
          _context.TaxiOrders.Add(model);
        }
        
    }
}