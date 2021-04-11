using System.ComponentModel.DataAnnotations;

namespace Get_Taxi.Models
{
    public class BlogAddModel
    {
        public string BlogName { get; set; }
        [Required]
        public string BlogText { get; set; }
        public string BlogImage { get; set; }
        
    }
}