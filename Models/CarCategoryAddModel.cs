using System.ComponentModel.DataAnnotations;

namespace Get_Taxi.Models
{
    public class CarCategoryAddModel
    {
        [Required]
        public string classCategory { get; set; } 
    }
}