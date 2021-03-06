using Get_Taxi.Entities;
using Microsoft.EntityFrameworkCore;

namespace Get_Taxi.Models
{
    public class AplicationDbContext:DbContext
    {
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options):base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder){
            modelBuilder.Entity<User>()
               .Property(p => p.UserRole)
                  .HasDefaultValue("Customer");
           
        }

        

        public DbSet<User> User {get;set;}
        
        public DbSet<TaxiOrders> TaxiOrders { get; set; }
        public DbSet<Messages> Messages {get;set;}
        public DbSet<SubscribedUsers> SubscribedUsers { get; set; }
       
        public DbSet<Blog> Blog { get; set; }
        
        
    }
}