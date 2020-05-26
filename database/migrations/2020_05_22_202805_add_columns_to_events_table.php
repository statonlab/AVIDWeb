<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('events', function (Blueprint $table) {
            $table->string('event_type');
            $table->dateTimeTz('event_end')->nullable();
            $table->text('contact_info')->nullable();

            $table->dateTimeTz('event_start')->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('events', function (Blueprint $table) {
            $table->dropColumn('event_type');
            $table->dropColumn('event_end');
            $table->dropColumn('contact_info');

            $table->dateTime('event_start')->change();
        });
    }
}
