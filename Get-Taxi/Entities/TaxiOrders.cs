using System;
using System.ComponentModel.DataAnnotations;

namespace Get_Taxi.Entities
{
    public class TaxiOrders
    {
        public int Id { get; set; }
        [Required]
        public string startDestination { get; set; }
        [Required]
        public string endDestination { get; set; }
        [Required]
        public DateTime timeDate { get; set; }
        [Required]
        public string carClass { get; set; }
        [Required]
        public string phoneNumber { get; set; }
        public int passengersNumber { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}