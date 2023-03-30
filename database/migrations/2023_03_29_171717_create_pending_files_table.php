<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pending_files', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\User::class)->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('path')->nullable();
            $table->string('disk')->nullable();
            $table->text('url')->nullable();
            $table->integer('progress')->nullable();
            $table->text('error')->nullable();
            $table->json('filters')->nullable();
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
        Schema::dropIfExists('pending_files');
    }
};
