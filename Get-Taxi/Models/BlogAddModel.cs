using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace Get_Taxi.Models
{
    public class BlogAddModel
    {
        public string BlogName { get; set; }
        [Required]
        public string BlogText { get; set; }
        public IFormFile BlogImage { get; set; }
        
    }
}