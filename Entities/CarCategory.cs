using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Get_Taxi.Entities
{
    public class CarCategory
    {
        public int Id { get; set; }
        [Required]
        public string classCategory { get; set; }
        public ICollection<Cars> Cars {get;set;}
    }
}