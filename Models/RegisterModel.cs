using System.ComponentModel.DataAnnotations;

namespace Get_Taxi.Models
{
    public class RegisterModel
    {
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]       
        public string Password { get; set; }       
    }
}