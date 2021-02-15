using System;
using System.ComponentModel.DataAnnotations;

namespace Get_Taxi.Entities
{
    public class Blog
    {
        public Blog()
        {
            CratedAt = DateTime.UtcNow;
            
        }
        public int Id { get; set; }
        [Required]
        public string BlogName { get; set; }
        [Required]
        public string BlogText { get; set; }
        [Required]
        public DateTime CratedAt { get; set; }
        public int BlogCategoryId { get; set; }
        public string BlogImage { get; set; }
        public BlogCategory BlogCategory { get; set; }
    }
}