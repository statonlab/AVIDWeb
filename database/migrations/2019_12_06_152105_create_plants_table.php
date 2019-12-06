<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plants', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('plot_id');
            $table->unsignedBigInteger('plant_type_id');
            $table->unsignedBigInteger('species_id')->nullable();
            $table->integer('tag')->nullable();
            $table->string('quadrant')->nullable();
            $table->date('collected_at')->nullable();
            $table->integer('stems')->nullable();
            $table->integer('flowers')->nullable();
            $table->timestamps();

            $table->foreign('plot_id')
                ->references('id')
                ->on('plots')
                ->onDelete('cascade');

            $table->foreign('plant_type_id')
                ->references('id')
                ->on('plant_types')
                ->onDelete('cascade');

            $table->foreign('species_id')
                ->references('id')
                ->on('species')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('plants');
    }
}
