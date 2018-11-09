using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace TesteUpload.Model
{
    [Table("Rifa")]
    public class RifaModel
    {
        public RifaModel()
        {
            RifasUsuario = new List<RifasUsuarioModel>();
        }
        [Key]
        public int Id { get; set; }
        [Required]
        public string Imagem { get; set; }
        [Required]
        public string Descricao { get; set; }
        [Required]
        public double Preco { get; set; }
        [Required]
        public string Numero { get; set; }
        public string Status { get; set; }

        public virtual ICollection<RifasUsuarioModel> RifasUsuario { get; set; }


    }
}