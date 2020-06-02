<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReminderEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reminder_events', function (Blueprint $table) {
            $table->id();
            $table->foreignId('reminder_id')
                ->nullable()
                ->constrained()
                ->onDelete('cascade');
            $table->foreignId('site_id')
                ->nullable()
                ->constrained()
                ->onDelete('cascade');
            $table->date('date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reminder_events');
    }
}
