using System.Collections.Generic;
using System.Linq;
using Get_Taxi.Entities;
using Get_Taxi.Models;
using Get_Taxi.Services.ServiceInterfaces;

namespace Get_Taxi.Services.Repositories
{
    public class TaxiOrdersRepository : Repository<TaxiOrders>, ITaxiOrders
    {
        private  AplicationDbContext _context;
        public TaxiOrdersRepository(AplicationDbContext context) : base(context)
        {
            _context = context;

        }
        public IEnumerable<TaxiOrders> getTaxiOrders()
        {
           return  _context.TaxiOrders.ToList();
        }
    }
}