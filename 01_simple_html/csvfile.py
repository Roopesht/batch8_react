def create_csv_file(filename, data):
    with open(filename, 'w') as file:
        for row in data:
            file.write(','.join(row) + '\n')

create_csv_file('data.csv', [['Name', 'Age'], ['Alice', '30'], ['Bob', '25']])