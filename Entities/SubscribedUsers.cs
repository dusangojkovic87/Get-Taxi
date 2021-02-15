using System;
using System.ComponentModel.DataAnnotations;

namespace Get_Taxi.Entities
{
    public class SubscribedUsers
    {
        public SubscribedUsers()
        {
            dateofSubsription = DateTime.UtcNow;   
        }
        
        public int Id { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public DateTime dateofSubsription { get; set; }
    }
}