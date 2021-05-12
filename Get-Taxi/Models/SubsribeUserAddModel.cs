using System.ComponentModel.DataAnnotations;

namespace Get_Taxi.Models
{
    public class SubsribeUserAddModel
    {
        [Required]
         public string Email { get; set; }
        
    }
}