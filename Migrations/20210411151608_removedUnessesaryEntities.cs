using Microsoft.EntityFrameworkCore.Migrations;

namespace Get_Taxi.Migrations
{
    public partial class removedUnessesaryEntities : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Blog_BlogCategory_BlogCategoryId",
                table: "Blog");

            migrationBuilder.DropTable(
                name: "BlogCategory");

            migrationBuilder.DropTable(
                name: "Cars");

            migrationBuilder.DropTable(
                name: "CarCategory");

            migrationBuilder.DropIndex(
                name: "IX_Blog_BlogCategoryId",
                table: "Blog");

            migrationBuilder.DropColumn(
                name: "BlogCategoryId",
                table: "Blog");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BlogCategoryId",
                table: "Blog",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "BlogCategory",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Category = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BlogCategory", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CarCategory",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    classCategory = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarCategory", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Cars",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CarCategoryId = table.Column<int>(type: "int", nullable: false),
                    brand = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    color = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    horsePower = table.Column<double>(type: "float", nullable: false),
                    make = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    regNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    seatNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    year = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cars", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Cars_CarCategory_CarCategoryId",
                        column: x => x.CarCategoryId,
                        principalTable: "CarCategory",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Blog_BlogCategoryId",
                table: "Blog",
                column: "BlogCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Cars_CarCategoryId",
                table: "Cars",
                column: "CarCategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Blog_BlogCategory_BlogCategoryId",
                table: "Blog",
                column: "BlogCategoryId",
                principalTable: "BlogCategory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
