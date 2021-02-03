using System.ComponentModel.DataAnnotations;
using Get_Taxi.Entities;

namespace Get_Taxi.Models
{
    public class CarAddModel
    {
        public string make { get; set; }
        [Required]
        public string brand { get; set; }
        [Required]
        public string year { get; set; }
        [Required]
        public double horsePower { get; set; }
        [Required]
        public string color { get; set; }
        [Required]
        public string seatNumber { get; set; }
        [Required]
        public string regNumber { get; set; }
        public int CarCategoryId { get; set; }
        public CarCategory CarCategory { get; set; }
        
    }
}