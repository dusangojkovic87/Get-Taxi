using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace Get_Taxi.Helpers
{
    public class Uploader
    {
        
      
        public string UploadImage(IFormFile img, string root, string pathToSave)
        {
            string uniqueImgName = null;

            if (img != null)
            {
                string uploadFolder = Path.Combine(root + pathToSave);
                uniqueImgName = Guid.NewGuid().ToString() + img.FileName;
                string filePath = Path.Combine(uploadFolder, uniqueImgName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    img.CopyTo(fileStream);
                }
            }



            return uniqueImgName;




            
        }
    }
}