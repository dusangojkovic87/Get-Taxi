using System.ComponentModel.DataAnnotations;

namespace Get_Taxi.Entities
{
    public class Cars
    {
        public int Id { get; set; }
        [Required]
        public string make { get; set; }
        [Required]
        public string brand { get; set; }
        [Required]
        public string year { get; set; }
        [Required]
        public double horsePower { get; set; }
        [Required]
        public string color { get; set; }
        [Required]
        public string seatNumber { get; set; }
        [Required]
        public string regNumber { get; set; }
        public int CarCategoryId { get; set; }
        public CarCategory CarCategory { get; set; }

    }
}