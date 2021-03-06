# Generated by Django 4.0.2 on 2022-02-26 22:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0002_remove_workingweek_fri_remove_workingweek_mon_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='WorkingWeek',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('place', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='work_time', to='events.place')),
            ],
        ),
        migrations.CreateModel(
            name='WorkingDay',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start', models.TimeField()),
                ('end', models.TimeField()),
                ('fri_obj', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='fri', to='events.workingweek')),
                ('mon_obj', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='mon', to='events.workingweek')),
                ('san_obj', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='san', to='events.workingweek')),
                ('sat_obj', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='sat', to='events.workingweek')),
                ('thu_obj', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='thu', to='events.workingweek')),
                ('tue_obj', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='tue', to='events.workingweek')),
                ('wed_obj', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='wed', to='events.workingweek')),
            ],
        ),
    ]
