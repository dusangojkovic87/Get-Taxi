using Get_Taxi.Models;
using Get_Taxi.Services.ServiceInterfaces;

namespace Get_Taxi.Services.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AplicationDbContext _context;
        public UnitOfWork(AplicationDbContext context)
        {
            _context = context;
            AuthUser = new AuthRepository(_context);
            Booking = new BookingRepository(_context);
            Messages = new MessageRepository(_context);
            SubsribeEmail = new SubscribeRepository(_context);
            TaxiOrders = new TaxiOrdersRepository(_context);
            BlogPost = new BlogRepository(_context);
            
         

        }

        
        public IAuthRepository AuthUser { get; set; }
        public IBookingRepository Booking { get; set; }
        public IMessageRepository Messages { get; set; }
        public ISubscribeRepository SubsribeEmail { get; set; }
        public ITaxiOrders TaxiOrders {get;set;}
        public IBlogRepository BlogPost { get; set; }
      

        public void Dispose()
        {
            _context.Dispose();
        }

        public int Save()
        {
            return _context.SaveChanges();
        }
    }
}