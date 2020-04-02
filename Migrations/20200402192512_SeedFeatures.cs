using Microsoft.EntityFrameworkCore.Migrations;

namespace vega.Migrations
{
    public partial class SeedFeatures : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Features (Name, MakeID) VALUES ('Make1-FeatureA', (SELECT ID FROM Makes WHERE Name = 'Make1'))");
            migrationBuilder.Sql("INSERT INTO Features (Name, MakeID) VALUES ('Make1-FeatureB', (SELECT ID FROM Makes WHERE Name = 'Make1'))");
            migrationBuilder.Sql("INSERT INTO Features (Name, MakeID) VALUES ('Make1-FeatureC', (SELECT ID FROM Makes WHERE Name = 'Make1'))");

            migrationBuilder.Sql("INSERT INTO Features (Name, MakeID) VALUES ('Make2-FeatureA', (SELECT ID FROM Makes WHERE Name = 'Make2'))");
            migrationBuilder.Sql("INSERT INTO Features (Name, MakeID) VALUES ('Make2-FeatureB', (SELECT ID FROM Makes WHERE Name = 'Make2'))");
            migrationBuilder.Sql("INSERT INTO Features (Name, MakeID) VALUES ('Make2-FeatureC', (SELECT ID FROM Makes WHERE Name = 'Make2'))");

            migrationBuilder.Sql("INSERT INTO Features (Name, MakeID) VALUES ('Make3-FeatureA', (SELECT ID FROM Makes WHERE Name = 'Make3'))");
            migrationBuilder.Sql("INSERT INTO Features (Name, MakeID) VALUES ('Make3-FeatureB', (SELECT ID FROM Makes WHERE Name = 'Make3'))");
            migrationBuilder.Sql("INSERT INTO Features (Name, MakeID) VALUES ('Make3-FeatureC', (SELECT ID FROM Makes WHERE Name = 'Make3'))");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Makes WHERE Name IN ('Make1', 'Make2', 'Make3')");

        }
    }
}
