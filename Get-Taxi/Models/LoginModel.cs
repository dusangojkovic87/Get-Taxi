using System.ComponentModel.DataAnnotations;

namespace Get_Taxi.Models
{
    public class LoginModel
    {
        [Required]
         public string Email { get; set; }
        [Required]       
        public string Password { get; set; }
        
    }
}