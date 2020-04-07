<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMeasurementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('measurements', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('plant_id');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->boolean('is_located');
            $table->date('date');
            $table->double('height')->nullable();
            $table->boolean('is_alive')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('plant_id')
                ->references('id')
                ->on('plants')
                ->onDelete('cascade');

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('measurements');
    }
}
