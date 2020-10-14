import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602686173240 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Para criar as tabela execute
    //  yarn typeorm migration:run
    await queryRunner.createTable(new Table ({
      name: 'images',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'path',
          type: 'varchar'
        },
        {
          name: 'orphanage_id',
          type: 'integer'
        }
      ],
      foreignKeys: [
        {
          name: 'image_orphanages',
          columnNames: ['orphanage_id'],
          referencedTableName: 'orphanages',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Para reverter/deletar
    //  yarn typeorm migration:revert
    await queryRunner.dropTable('images');
  }

}
