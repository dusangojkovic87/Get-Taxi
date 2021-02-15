using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Get_Taxi.Entities
{
    public class BlogCategory
    {
        public int Id { get; set; }
        [Required]
        public string Category { get; set; }
        [Required]
        public ICollection<Blog> Blog {get;set;}
    }
}