using Microsoft.EntityFrameworkCore.Migrations;

namespace TesteUpload.Migrations
{
    public partial class V03 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Usuario_Rifa_RifaId",
                table: "Usuario");

            migrationBuilder.DropIndex(
                name: "IX_Usuario_RifaId",
                table: "Usuario");

            migrationBuilder.DropColumn(
                name: "RifaId",
                table: "Usuario");

            migrationBuilder.CreateTable(
                name: "RifasUsuario",
                columns: table => new
                {
                    IdUsuario = table.Column<int>(nullable: false),
                    IdRifa = table.Column<int>(nullable: false),
                    Status = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RifasUsuario", x => x.IdUsuario);
                    table.ForeignKey(
                        name: "FK_RifasUsuario_Rifa_IdRifa",
                        column: x => x.IdRifa,
                        principalTable: "Rifa",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RifasUsuario_Usuario_IdUsuario",
                        column: x => x.IdUsuario,
                        principalTable: "Usuario",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RifasUsuario_IdRifa",
                table: "RifasUsuario",
                column: "IdRifa");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RifasUsuario");

            migrationBuilder.AddColumn<int>(
                name: "RifaId",
                table: "Usuario",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Usuario_RifaId",
                table: "Usuario",
                column: "RifaId");

            migrationBuilder.AddForeignKey(
                name: "FK_Usuario_Rifa_RifaId",
                table: "Usuario",
                column: "RifaId",
                principalTable: "Rifa",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
