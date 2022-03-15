# Generated by Django 4.0.2 on 2022-02-26 22:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0004_remove_workingweek_place_delete_workingday_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='WorkingDay',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('week_day', models.CharField(choices=[('mon', 'Понедельник'), ('tue', 'Вторник'), ('wed', 'Среда'), ('thu', 'Четверг'), ('fri', 'Пятница'), ('sat', 'Субботу'), ('sun', 'Воскресенье')], max_length=4)),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
                ('place', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='events.place')),
            ],
            options={
                'unique_together': {('place', 'week_day')},
            },
        ),
    ]