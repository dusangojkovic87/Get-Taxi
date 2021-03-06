using System;
using System.ComponentModel.DataAnnotations;

namespace Get_Taxi.Entities
{
    public class Messages
    {
        public Messages()
        {
           
           ReceivedAt = DateTime.Now;
        }

        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Question { get; set; }
        [Required]  
        public DateTime ReceivedAt { get; set; }
    }
}