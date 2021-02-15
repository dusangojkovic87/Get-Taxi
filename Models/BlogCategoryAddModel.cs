using System.ComponentModel.DataAnnotations;

namespace Get_Taxi.Models
{
    public class BlogCategoryAddModel
    {
        [Required]
        public string Category { get; set; }
        
    }
}