/**
 * applies classes odd and even to odd and even rows respectively
 */
function applyAlternateRowColors(){	
	$('.empTable tbody tr:odd').removeClass('even').addClass('odd');
	$('.empTable tbody tr:even').removeClass('odd').addClass('even');
}

$(document).ready(function(){	
    applyAlternateRowColors();
	// add sorting to each column of the table
	$('.empTable').each(function(){
		var $table = $(this);
		
		// change background color of selected row
		$table.find('tbody > tr').click(function(){			
			$table.find('tr').removeClass('currentrow');
			$(this).addClass('currentrow');
		})
		
		$table.find('th').each(function(column){
			var $header = $(this);
			$header.hover(function(){
				$header.addClass('hover');
			}, function(){
				$header.removeClass('hover');
			})
			
			// when user clicks on header of the table, the header class
			// changes from 'asc' to 'desc' and vice versa
			$header.click(function(){
				if ($header.hasClass('asc')){
					   $header.removeClass('asc').addClass('desc');
					}else if ($header.hasClass('desc')){
						$header.removeClass('desc').addClass('asc');
					}else{
						$header.addClass('asc');	
					}				
			})
			
			// sorting for Employee Name and Department columns
			if ($header.is('.sort-alphabet')){
				$header.click(function(){
					var rows = $table.find('tbody > tr').get();
					if ($header.hasClass('asc')){ // sort in descending order
						rows.sort(function(a,b){
							var keyA = $(a).children('td').eq(column).text().toUpperCase();
							var keyB = $(b).children('td').eq(column).text().toUpperCase();
							if (keyA > keyB) return -1;
							if (keyA < keyB) return 1;
							return 0;
						})						
					}else { // sort in ascneding order
						   rows.sort(function(a,b){
							var keyA = $(a).children('td').eq(column).text().toUpperCase();
							var keyB = $(b).children('td').eq(column).text().toUpperCase();
							if (keyA < keyB) return -1;
							if (keyA > keyB) return 1;
							return 0;
						})
					}
					// append sorted rows to the table			
					$.each(rows, function(index,row){
						$table.children('tbody').append(row);
					})
					// re apply alternate row colors after row binding					
					applyAlternateRowColors();
				})
			}
			
			// sorting for Joining Date column
			if ($header.is('.sort-date')){
				$header.click(function(){
					var rows = $table.find('tbody > tr').get();
					if ($header.hasClass('asc')){ // sort in descending order
						rows.sort(function(a,b){
							var keyA = new Date($(a).children('td').eq(column).text());
							var keyB = new Date($(b).children('td').eq(column).text().toUpperCase());
							if (keyA > keyB) return -1;
							if (keyA < keyB) return 1;
							return 0;
						})						
					}else { // sort in ascneding order
						   rows.sort(function(a,b){
							var keyA = new Date($(a).children('td').eq(column).text());
							var keyB = new Date($(b).children('td').eq(column).text());
							if (keyA < keyB) return -1;
							if (keyA > keyB) return 1;
							return 0;
						})
					}
					// append sorted rows to the table			
					$.each(rows, function(index,row){
						$table.children('tbody').append(row);
					})
					// re apply alternate row colors after row binding		
					applyAlternateRowColors();					
				})
			}
			
			// sorting for salary column
			if ($header.is('.sort-numeric')){
				$header.click(function(){
					var rows = $table.find('tbody > tr').get();
					if ($header.hasClass('asc')){ // sort in descending order
						rows.sort(function(a,b){
							var salaryA = $(a).children('td').eq(column).text();
							var salaryB = $(b).children('td').eq(column).text();
							var keyA = parseFloat(salaryA.substring(0, salaryA.length - 1));
							var keyB = parseFloat(salaryB.substring(0, salaryB.length - 1));
							if (keyA > keyB) return -1;
							if (keyA < keyB) return 1;
							return 0;
						})						
					}else { // sort in ascneding order
						   rows.sort(function(a,b){
							var salaryA = $(a).children('td').eq(column).text();
							var salaryB = $(b).children('td').eq(column).text();
							var keyA = parseFloat(salaryA.substring(0, salaryA.length - 1));
							var keyB = parseFloat(salaryB.substring(0, salaryB.length - 1));
							if (keyA < keyB) return -1;
							if (keyA > keyB) return 1;
							return 0;
						})
					}
					// append sorted rows to the table			
					$.each(rows, function(index,row){
						$table.children('tbody').append(row);
					})
					
					// re apply alternate row colors after row binding		
					applyAlternateRowColors();
					
				})
			}
		})
		
	})
})
