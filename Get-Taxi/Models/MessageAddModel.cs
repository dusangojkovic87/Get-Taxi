using System.ComponentModel.DataAnnotations;

namespace Get_Taxi.Models
{
    public class MessageAddModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Question { get; set; }
        
    }
}