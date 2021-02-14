using System;
using System.ComponentModel.DataAnnotations;
using Get_Taxi.Entities;

namespace Get_Taxi.Models
{
    
    public class TaxiOrderAddModel
    {
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