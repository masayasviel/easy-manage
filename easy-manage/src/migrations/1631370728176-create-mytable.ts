import {MigrationInterface, QueryRunner} from "typeorm";

export class createMytable1631370728176 implements MigrationInterface {
    name = 'createMytable1631370728176'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`my_database\`.\`my_table\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`my_database\`.\`my_table\` DROP COLUMN \`message\``);
        await queryRunner.query(`ALTER TABLE \`my_database\`.\`my_table\` ADD \`message\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`my_database\`.\`my_table\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`my_database\`.\`my_table\` ADD \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`my_database\`.\`my_table\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`my_database\`.\`my_table\` ADD \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`my_database\`.\`my_table\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`my_database\`.\`my_table\` ADD \`updated_at\` datetime(0) NULL`);
        await queryRunner.query(`ALTER TABLE \`my_database\`.\`my_table\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`my_database\`.\`my_table\` ADD \`created_at\` datetime(0) NULL`);
        await queryRunner.query(`ALTER TABLE \`my_database\`.\`my_table\` DROP COLUMN \`message\``);
        await queryRunner.query(`ALTER TABLE \`my_database\`.\`my_table\` ADD \`message\` text CHARACTER SET "utf8" COLLATE "utf8_bin" NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`my_database\`.\`my_table\` CHANGE \`id\` \`id\` int(20) NOT NULL AUTO_INCREMENT`);
    }

}
