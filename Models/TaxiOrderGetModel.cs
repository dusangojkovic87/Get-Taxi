using System;
using System.ComponentModel.DataAnnotations;

namespace Get_Taxi.Models
{
    public class TaxiOrderGetModel
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
        
    }
}