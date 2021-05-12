using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Get_Taxi.Entities
{
    
    public class User
    {
        public User()
        {
            UserRole = "Customer";
            
        }
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]       
        public string Password { get; set; }
        [Required]
        public string UserRole { get; set; }
        public ICollection<TaxiOrders> TaxiOrders {get;set;}
    }
}