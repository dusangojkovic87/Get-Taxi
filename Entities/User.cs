using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Get_Taxi.Entities
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]       
        public string Password { get; set; }
        public ICollection<TaxiOrders> TaxiOrders {get;set;}
    }
}