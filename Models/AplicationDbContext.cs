using Get_Taxi.Entities;
using Microsoft.EntityFrameworkCore;

namespace Get_Taxi.Models
{
    public class AplicationDbContext:DbContext
    {
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options):base(options)
        {
            
        }

        public DbSet<User> User {get;set;}
        public DbSet<CarCategory> CarCategory { get; set; }
        public DbSet<Cars> Cars { get; set; }
        public DbSet<TaxiOrders> TaxiOrders { get; set; }
        public DbSet<Messages> Messages {get;set;}
        public DbSet<SubscribedUsers> SubscribedUsers { get; set; }
        public DbSet<BlogCategory> BlogCategory { get; set; }
        public DbSet<Blog> Blog { get; set; }
        
        
    }
}