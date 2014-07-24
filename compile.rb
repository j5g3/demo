#!/usr/bin/env ruby

demo = ARGV[0]

if !demo
	puts demo + ' Not Found!'
	exit(1)
end

html = File.read(demo + '/debug.html')

src = html.scan(/script src="([^"]+)/).join(' ')

puts "Compiling: " + src

Dir.chdir(demo) do
	`java -jar ../../../tools/closure-compiler/compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --language_in ECMASCRIPT5 --js_output_file=compiled.js #{src}`
end


